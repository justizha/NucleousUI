"use client"

import { motion } from "framer-motion"

export default function PageWrapper({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.15 }}
            className="min-h-screen bg-main-black"
        >
            {children}
        </motion.div>
    )
} 