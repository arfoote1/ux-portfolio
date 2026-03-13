import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

interface Question {
  id: string;
  question: string;
  options: {
    label: string;
    value: string;
  }[];
}

interface Recommendation {
  tone: string;
  approach: string;
  examples: string[];
  avoid: string[];
}

const questions: Question[] = [
  {
    id: "context",
    question: "What's happening in this moment?",
    options: [
      { label: "Something went wrong", value: "error" },
      { label: "User is completing a task", value: "task" },
      { label: "We're asking for information", value: "input" },
      { label: "Confirming a high-stakes action", value: "confirmation" }
    ]
  },
  {
    id: "emotional-state",
    question: "What's the user likely feeling?",
    options: [
      { label: "Frustrated or confused", value: "frustrated" },
      { label: "Focused and task-oriented", value: "focused" },
      { label: "Cautious or uncertain", value: "cautious" },
      { label: "Confident and ready", value: "confident" }
    ]
  },
  {
    id: "stakes",
    question: "How high are the stakes?",
    options: [
      { label: "High (money, security, safety)", value: "high" },
      { label: "Medium (time, effort, preferences)", value: "medium" },
      { label: "Low (optional, exploratory)", value: "low" }
    ]
  }
];

const getRecommendation = (answers: Record<string, string>): Recommendation => {
  const { context, "emotional-state": emotion, stakes } = answers;

  // Error states
  if (context === "error") {
    return {
      tone: "Reassuring & Solution-Focused",
      approach: "Acknowledge the issue, explain what happened in plain language, and provide clear next steps. Avoid blame.",
      examples: [
        "We couldn't process your payment. Please check your card details and try again.",
        "Something went wrong on our end. We're working on it. Try refreshing the page in a few minutes.",
        "We didn't find that item. Double-check the product number or browse similar options below."
      ],
      avoid: [
        "ERROR: Transaction failed",
        "Invalid input detected",
        "System unavailable. Please retry later."
      ]
    };
  }

  // High-stakes confirmations
  if (stakes === "high" || context === "confirmation") {
    return {
      tone: "Clear, Calm & Precise",
      approach: "Use simple, direct language. Break down what will happen. Give users control to confirm or cancel. Avoid pressure.",
      examples: [
        "You're about to cancel your order for $247.50. This can't be undone. Are you sure?",
        "We'll charge your card ending in 4829 for $1,234.56 today. Ready to complete your purchase?",
        "Deleting your account will remove all your saved projects and order history. This is permanent."
      ],
      avoid: [
        "Click OK to proceed with deletion",
        "Are you sure you want to continue?",
        "This action cannot be reversed. Confirm?"
      ]
    };
  }

  // Task completion (focused users)
  if (emotion === "focused" || context === "task") {
    return {
      tone: "Efficient & Supportive",
      approach: "Get out of the way. Use concise, action-oriented language. Provide progress indicators. Celebrate completion.",
      examples: [
        "Step 2 of 3: Add your delivery address",
        "Almost done! Review your order details below.",
        "All set! Your order will arrive by Thursday, March 20."
      ],
      avoid: [
        "Now that you've completed step one, let's move on to the next phase...",
        "Great job! You're doing amazing!",
        "Please carefully review the following information before proceeding to the next step"
      ]
    };
  }

  // Uncertain or cautious users
  if (emotion === "cautious" || context === "input") {
    return {
      tone: "Patient & Guiding",
      approach: "Build confidence with explanations. Show why you're asking. Provide examples or defaults. Make it feel low-pressure.",
      examples: [
        "What's your ZIP code? We'll use this to show products available near you.",
        "Choose your preferred delivery day (you can change this later)",
        "We'll send order updates to this email. You can add more later in your account settings."
      ],
      avoid: [
        "Enter ZIP code",
        "Select delivery preference",
        "Provide valid email address to continue"
      ]
    };
  }

  // Default: Balanced approach
  return {
    tone: "Friendly & Clear",
    approach: "Strike a balance between warmth and efficiency. Be conversational but respect the user's time.",
    examples: [
      "Let's get started. What are you working on today?",
      "Need help finding the right product? Tell us what you're building.",
      "Your order is on the way! Track it anytime in your account."
    ],
    avoid: [
      "Welcome to our platform! We're excited to help you today!",
      "Please select an option from the menu below to continue",
      "Your request has been successfully processed"
    ]
  };
};

export function ContentDecisionTree() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentStep];
  const isLastQuestion = currentStep === questions.length - 1;

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const recommendation = showResults ? getRecommendation(answers) : null;

  return (
    <div className="max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            {/* Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Question {currentStep + 1} of {questions.length}</span>
                <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-purple-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">{currentQuestion.question}</h3>
              <div className="grid gap-4">
                {currentQuestion.options.map((option) => (
                  <motion.button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-6 text-left border-2 rounded-2xl transition-all ${
                      answers[currentQuestion.id] === option.value
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">{option.label}</span>
                      <ArrowRight className="w-5 h-5 text-purple-600" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            {currentStep > 0 && (
              <Button variant="ghost" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                Your Content Guidance
              </div>
              <h3 className="text-4xl font-bold">{recommendation?.tone}</h3>
            </div>

            {/* Approach */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl">
              <h4 className="font-bold text-lg mb-3">Recommended Approach</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                {recommendation?.approach}
              </p>
            </div>

            {/* Examples */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Try This
              </h4>
              <div className="space-y-3">
                {recommendation?.examples.map((example, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg"
                  >
                    <p className="text-gray-700">"{example}"</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Avoid */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center text-red-600">✕</span>
                Avoid This
              </h4>
              <div className="space-y-3">
                {recommendation?.avoid.map((example, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg"
                  >
                    <p className="text-gray-700 line-through opacity-75">"{example}"</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button onClick={handleReset} className="flex-1">
                Try Another Scenario
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
