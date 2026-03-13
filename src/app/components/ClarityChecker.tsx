import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";

interface Example {
  id: string;
  category: string;
  title: string;
  before: string;
  after: string;
  improvements: string[];
}

const examples: Example[] = [
  {
    id: "error",
    category: "Error Message",
    title: "Delivery Issue",
    before: "ERROR: Unable to process delivery request. Invalid parameters detected in shipping address validation system. Reference Code: ERR_SHIP_VAL_003. Please contact customer service or retry transaction.",
    after: "We couldn't confirm your delivery address. Please double-check your street address and ZIP code, then try again.",
    improvements: [
      "Removed technical jargon (ERR_SHIP_VAL_003)",
      "Explained what went wrong in plain language",
      "Provided clear next steps without overwhelming the user"
    ]
  },
  {
    id: "onboarding",
    category: "Onboarding",
    title: "Account Setup",
    before: "To proceed with account initialization, users must complete the following mandatory authentication steps: 1) Input valid email credentials 2) Generate secure alphanumeric password meeting complexity requirements (min. 8 characters, 1 uppercase, 1 special character) 3) Verify email ownership via confirmation link transmission.",
    after: "Let's set up your account:\n\n1. Enter your email address\n2. Create a password (at least 8 characters with one capital letter and one symbol)\n3. Click the confirmation link we'll send to your inbox\n\nYou'll be ready to start shopping in just a few minutes.",
    improvements: [
      "Conversational tone instead of technical",
      "Simplified password requirements",
      "Added time expectation for reassurance",
      "Structured as friendly steps, not requirements"
    ]
  },
  {
    id: "ai-guidelines",
    category: "AI Voice",
    title: "Assistant Tone",
    before: "I love helping you with this!",
    after: "Here's how I can help.",
    improvements: [
      "Removed overly enthusiastic, emotional language",
      "Made it action-oriented and confident",
      "Focused on the user's needs, not the AI's feelings",
      "Clearer and more professional"
    ]
  }
];

export function ClarityChecker() {
  const [selectedExample, setSelectedExample] = useState<Example>(examples[0]);
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="space-y-8">
      {/* Example Selector */}
      <div className="flex flex-wrap gap-4">
        {examples.map((example) => (
          <Button
            key={example.id}
            variant={selectedExample.id === example.id ? "default" : "outline"}
            onClick={() => {
              setSelectedExample(example);
              setShowAfter(false);
            }}
            className="flex-1 min-w-[200px]"
          >
            {example.category}
          </Button>
        ))}
      </div>

      {/* Before/After Display */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Before */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <h4 className="font-bold text-xl">Before</h4>
          </div>
          <div className="p-6 bg-red-50 border-2 border-red-200 rounded-2xl min-h-[200px]">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {selectedExample.before}
            </p>
          </div>
        </div>

        {/* After */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <h4 className="font-bold text-xl">After</h4>
          </div>
          <div className="p-6 bg-green-50 border-2 border-green-200 rounded-2xl min-h-[200px]">
            <AnimatePresence mode="wait">
              {!showAfter ? (
                <motion.div
                  key="hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center h-full min-h-[150px]"
                >
                  <Button
                    onClick={() => setShowAfter(true)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Show improved version
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="visible"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedExample.after}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Improvements */}
      <AnimatePresence>
        {showAfter && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-purple-50 border-2 border-purple-200 rounded-2xl">
              <h4 className="font-bold text-lg mb-4">What Changed</h4>
              <ul className="space-y-3">
                {selectedExample.improvements.map((improvement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{improvement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}